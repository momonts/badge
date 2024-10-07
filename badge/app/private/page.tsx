import { redirect } from "next/navigation";
import { createClient } from "@/app/utils/supabase/server";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import React from "react";
import { getUser } from "../utils/supabase/server";
import {
  clusterApiUrl,
  Connection,
  PublicKey,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";
import axios from "axios";
import DivNFT from "../components/divNFT";

export default async function PrivatePage() {
  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
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

  if (error || !data?.user) {
    redirect("/login");
  }

  const { data: avatar, error: avatarError } = await supabase
    .from("profiles")
    .select("avatar_url")
    .eq("id", user?.id)
    .single();

  if (avatarError) {
    console.error("Error fetching profile pic:", avatarError.message);
  } else {
    const avatarValue = avatar?.avatar_url;
  }

  const { data: profilePic } = supabase.storage
    .from("avatars")
    .getPublicUrl(avatar?.avatar_url);

  let wallet = new PublicKey(key?.key);
  const solanabalance =
    (await connection.getBalance(wallet)) / LAMPORTS_PER_SOL;

  let solanaPrice = 0;
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd"
    );
    console.log("CoinGecko Response:", response.data); // Log the response
    solanaPrice = response.data.solana?.usd || 0; // Use optional chaining and default to 0
  } catch (error) {
    console.error("Error fetching Solana price:", error);
  }
  const usdbalance = solanabalance * solanaPrice;

  return (
    <main>
      <Navbar />
      <center>
        <div className="p-5"></div>
        <div className="stats bg-neutral-950 text-primary-content drop-shadow-lg">
          <div className="stat">
            <div className="stat-title text-white">Solana Balance</div>
            <div className="stat-value">{solanabalance.toFixed(2)} SOL</div>
            <div className="stat-actions">
              {/* <button className="btn btn-sm btn-success">Add funds</button> */}
            </div>
          </div>

          <div className="stat">
            <div className="stat-title text-white">USD Equivalent</div>
            <div className="stat-value">${usdbalance.toFixed(2)}</div>
            <div className="stat-actions">
              {/* <button className="btn btn-sm">Withdrawal</button>
              <button className="btn btn-sm">Deposit</button> */}
            </div>
          </div>

          <div className="avatar">
            <div className="w-24 rounded-full m-2">
              <img src={profilePic.publicUrl} />
            </div>
          </div>
        </div>
        <div className="divider divider-neutral-content"></div>
      </center>

      <DivNFT />
      <Footer />
    </main>
  );
}
