import { publicKey } from "@metaplex-foundation/umi";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { dasApi } from "@metaplex-foundation/digital-asset-standard-api";
import { createClient } from "@/app/utils/supabase/server";
import { getUser } from "../utils/supabase/server";

async function fetchNFTData(jsonUri: string | URL | Request) {
  const res = await fetch(jsonUri);
  if (!res.ok) {
    return null;
  }
  return await res.json();
}

async function fetchAllNFTData(jsonUris: (string | URL | Request)[]) {
  const nftDataArray = await Promise.all(
    jsonUris.map(async (jsonUri) => {
      const nftData = await fetchNFTData(jsonUri);
      return nftData || null;
    })
  );
  return nftDataArray;
}

export default async function DivNFT() {
  const supabase = createClient();
  const user = await getUser();

  const { data: key, error: errorkey } = await supabase
    .from("profiles")
    .select("key")
    .eq("id", user?.id)
    .single();

  if (errorkey) {
    console.error("Error fetching key:", errorkey.message);
  } else {
    const keyValue = key?.key;
  }
  const umi = createUmi("https://api.devnet.solana.com").use(dasApi());
  const owner = publicKey(key?.key);

  const assets = await umi.rpc.getAssetsByOwner({ owner });
  const ids = assets.items.map((item: { id: any }) => item.id);

  const assetDetails = [];

  for (const id of ids) {
    const asset = await umi.rpc.getAsset(id);
    assetDetails.push(asset);
  }

  const jsonUris = assetDetails.map((detail) => detail.content?.json_uri);

  async function fetchNFTData(uri: string | URL | Request) {
    try {
      const response = await fetch(uri);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      const { name, image, description } = data;

      return { name, image, description };
    } catch (error) {
      console.error("Error fetching NFT data:", error);
      return null;
    }
  }

  const nftDataArray = await fetchAllNFTData(jsonUris);
  return (
    <main>
      <center>
        <div className="max-w-4xl grid place-content-center grid-cols-4 grid-rows-auto gap-x-4 gap-y-32">
          {nftDataArray.length > 0 ? (
            nftDataArray.map((nft, index) => (
              <div
                key={index}
                className="max-w-52 outline outline-2 outline-neutral-700 shadow-md shadow-neutral-600"
              >
                <p className="subpixel-antialiased font-bold tracking-wide">
                  {nft.name}
                </p>
                <img src={nft.image} alt={nft.name} />
                <p className="text-clip">{nft.description}</p>
              </div>
            ))
          ) : (
            <p>No NFT data available.</p>
          )}
        </div>
      </center>
    </main>
  );
}
