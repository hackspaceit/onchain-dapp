'use client';
import IdentityComponents from '@/components/IdentityComponents';
import SwapComponents from '@/components/SwapComponents';
import TokenComponents from '@/components/TokenComponents';
import WalletComponents from '@/components/WalletComponents';
<header>
  <input type="checkbox" id="tag-menu"/>
  <label className="fa fa-bars fa-2x menu-bar" ></label>
  <a className="navbar-brand"></a>
  <div className="jw-drawer">
<nav>
      <ul>
        <li><a href="#"> Dashboard</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a rel="nofollow" href="#"> Mailer</a></li>
        <li><a href="#"> Music partner</a></li>
        <li><a href="#"> Music Partner</a></li>
        <li><a href="#">Blog</a></li>
        </ul>
        </nav>
        </div>
        </header>
export default function Page() {
  return (
 
 
          
    <div className="flex flex-col w-96 md:w-[600px]">
      <section className="flex flex-col w-full mb-6 pb-6 border-b border-sky-800">
        <aside className="flex mb-6">
          <h2 className="text-2xl">An onchain app in 100 components or less</h2>
        </aside>
        
        <nav>
        <ul>
          <li><a href="#"><i className="fa fa-dashboard"></i> Dashboard</a></li>
          <li><a href="/about"><i className="fa fa-address-card-o"></i> About Us</a></li>
          <li><a rel="nofollow" href="#"><i className="fa fa-envelope-open"></i> Mailer</a></li>
          <li><a href="#"><i className="fa fa-mixcloud"></i> Music partner</a></li>
          <li><a href="#"><i className="fa fa-mixcloud"></i> Music Partner</a></li>
          <li><a href="#"><i className="fa fa-feed"></i> Blog</a></li>
          </ul>
          </nav>  
      </section>
      <section className="flex flex-col w-full mb-6 pb-6 border-b border-sky-800">
        <aside className="flex mb-6">
          <h2 className="text-xl">Your Wallet</h2>
        </aside>
        <IdentityComponents />
      </section>
      <section className="flex flex-col w-full mb-6 pb-6 border-b border-sky-800">
        <aside className="flex mb-6">
          <h2 className="text-xl">Token</h2>
        </aside>
        <TokenComponents />
      </section>
      <section className="flex flex-col w-full mb-6 pb-6 border-b border-sky-800">
        <aside className="flex mb-6">
          <h2 className="text-xl">Wallet</h2>
        </aside>
        <WalletComponents />
      </section>
      <section className="flex flex-col w-full mb-6 pb-6 border-b border-sky-800">
        <aside className="flex flex-col mb-6">
          <h2 className="text-xl  mb-6">Swap</h2>
         
         
        </aside>
        <SwapComponents />
      </section>
    </div>
  );
}
