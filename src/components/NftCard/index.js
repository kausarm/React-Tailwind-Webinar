import React from 'react'
import ImgNft from '../../assets/images/image-equilibrium.jpg'
import IcEth from "../../assets/icons/icon-ethereum.svg";
import IcJam from "../../assets/icons/icon-clock.svg";
import ImProfile from "../../assets/images/image-avatar.png";

export default function NftCard() {
  return (
    <div className="cardWrapper bg-blue-900 w-[350px] h-auto p-5 rounded-[30px] ">
      <div className="imageWrapper">
        <img
          src={ImgNft}
          alt=""
          width={330}
          height={330}
          className="rounded-xl"
        />
      </div>
      <h1 className="mt-3 font-semibold text-white">Equilibrium #3429</h1>
      <p className="mt-3 text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
        est.
      </p>
      <div className="flex justify-between mt-3 mainPriceWrapper">
        <div className="flex priceWrapper">
          <img src={IcEth} alt="" width={12} height={12} />
          <span className="ml-2 font-semibold text-price">$0.041 ETH</span>
        </div>
        <div className="flex items-center wrapper">
          <img src={IcJam} alt="" width={10} height={10} className="w-5 h-5" />
          <span className="font-semibold text-gray-500">3 days left</span>
        </div>
      </div>
      <div className="line bg-gray-300 h-[1px] rounded-full mt-3" />
      <div className="flex items-center mt-4 creatorWrapper">
        <img src={ImProfile} alt="" width={40} height={40} className="mr-2"/>
        <span className="mr-1 font-semibold text-gray-400">Creation Of</span>
        <span className="font-semibold text-white">Jules Wyvern</span>
      </div>
    </div>
  );
}
