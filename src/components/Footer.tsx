"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = ({}) => {
  return (
    <footer className="z-50 flex h-full w-full flex-col items-center justify-center gap-14 bg-[#2d0912] px-2 py-12">
      <div className="flex w-full items-center justify-center gap-4">
        <Image
          src="/images/home/hero/logo.png"
          width={188}
          height={57}
          alt="logo"
        />
      </div>
      <div className="flex w-full max-w-[1300px] flex-col items-center justify-center gap-3 px-4 md:flex-row md:px-0">
        <div className="flex w-full flex-col items-center justify-center gap-3 border-b-[1px] border-b-primary py-6 md:w-1/3 md:border-b-0 md:border-r-[1px] md:border-r-primary">
          <p className="font-bai font-semibold uppercase tracking-[4px] text-primary">
            contact us
          </p>
          <div>
            <p className="text-center text-[#FFFDF1]">
              {" "}
              <Link href="tel:01514286842" className="">
                01514286842
              </Link>
              <br />
              {/* <Link href="mailto:info@istanbulbargrill.co.uk"
                className="">info@istanbulbargrill.co.uk</Link> */}
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-3 border-b-[1px] border-b-primary py-6 md:w-1/3 md:border-b-0 md:border-r-[1px] md:border-r-primary">
          <p className="font-bai font-semibold uppercase tracking-[4px] text-primary">
            address
          </p>
          <div>
            <p className="text-center text-[#FFFDF1]">
              <Link href="https://www.google.com/maps/place/Istanbul+Bar+%26+Grill+-+Woolton/@53.3744361,-2.86825,198m/data=!3m2!1e3!4b1!4m6!3m5!1s0x487b1feb87f19015:0xd0e5ee710b67c07f!8m2!3d53.3744361!4d-2.86825!16s%2Fg%2F1vc81bs5?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D">
                37-39 Allerton Road, L25 7RE
              </Link>
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-3 py-6 md:w-1/3">
          <p className="font-bai font-semibold uppercase tracking-[4px] text-primary">
            Opening hours
          </p>
          <div>
            <p className="text-center text-[#FFFDF1]">
              Everyday : From 12.30 To 23.00
              <br />
              Kitchen Closes At 22.00
            </p>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
        <Link
          href="https://in.search.yahoo.com/search;_ylt=AwrKEbVGvTlngQIAeua7HAx.;_ylc=X1MDMjExNDcyMzAwMwRfcgMyBGZyA21jYWZlZV9lLTI2ODYwXzNQQy12BGZyMgNzYi10b3AEZ3ByaWQDdmVyd1pwdWpTbTZxZU5RN2lEMjJOQQRuX3JzbHQDMARuX3N1Z2cDMARvcmlnaW4DaW4uc2VhcmNoLnlhaG9vLmNvbQRwb3MDMARwcXN0cgMEcHFzdHJsAzAEcXN0cmwDMzAEcXVlcnkDaXN0YW5idWwlMjBiYXIlMjBhbmQlMjBncmlsbCUyMHdvb2x0b24EdF9zdG1wAzE3MzE4MzcyNzE-?p=istanbul+bar+and+grill+woolton&fr=mcafee_e-26860_3PC-v&type=F210IN714G91841MNhJ%2BFSIbRCCvKdyV%2F2R5GgXXfvl%2BaCFyile5iUQkkoM%3D&fr2=sb-top"
          className="font-bai text-sm font-semibold uppercase tracking-[4px] text-[#FFFDF1]"
        >
          Google
        </Link>
        <Link
          href="https://www.facebook.com/Istanbulwoolton/"
          className="font-bai text-sm font-semibold uppercase tracking-[4px] text-[#FFFDF1]"
        >
          facebook
        </Link>
        <Link
          href="https://www.instagram.com/istanbulwoolton/"
          className="font-bai text-sm font-semibold uppercase tracking-[4px] text-[#FFFDF1]"
        >
          instagram
        </Link>
      </div>
      <p className="font-forum w-full text-center text-5xl font-[400] uppercase tracking-widest text-primary md:text-end md:text-9xl md:tracking-[106px]">
        ISTANBUL
      </p>
      <p className="text-[#64615C]">
        © 2024 Istanbul <Link href="https://foodo.ai">Powered By Foodo</Link>
      </p>
    </footer>
  );
};

export default Footer;
