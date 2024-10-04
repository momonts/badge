import { redirect } from "next/navigation";
import { createClient } from "@/app/utils/supabase/server";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import React from "react";

import {
  clusterApiUrl,
  Connection,
  PublicKey,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";

export default async function PrivatePage() {
  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  console.log(data);
  let sub = null;

  if (error || !data?.user) {
    redirect("/login");
  } else {
    const user = data.user;
    sub = user.user_metadata?.sub; // Access the full name from user_metadata
  }

  console.log(sub);

  let wallet = new PublicKey("8cXvHZLTvLpNCnzsQKiozgqqFVmLqzAjR51pV7xAVXSv");
  console.log(
    `${(await connection.getBalance(wallet)) / LAMPORTS_PER_SOL} SOL`
  );

  return (
    <main>
      <Navbar />
      <center>
        <div className="stats bg-primary text-primary-content">
          <div className="stat">
            <div className="stat-title text-white">Account balance</div>
            <div className="stat-value">
              ${(await connection.getBalance(wallet)) / LAMPORTS_PER_SOL} SOL
            </div>
            <div className="stat-actions">
              <button className="btn btn-sm btn-success">Add funds</button>
            </div>
          </div>

          <div className="stat">
            <div className="stat-title text-white">Current balance</div>
            <div className="stat-value">$89,400</div>
            <div className="stat-actions">
              <button className="btn btn-sm">Withdrawal</button>
              <button className="btn btn-sm">Deposit</button>
            </div>
          </div>

          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="testpfp.jpg" />
            </div>
          </div>
        </div>
        <div className="divider divider-error"></div>
      </center>
      <Footer />
    </main>
  );
}
