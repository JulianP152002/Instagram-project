import "./Header.css";
export function Header() {
  return (
    <>
      <div className=" block relative">
        <img
          className=" h-[640px] "
          src="../../../public/primary-imgs/phone.webp"
          alt=""
        />
      </div>
      <div>
        <img
          className="back1 absolute top-[74px] left-[23.25rem] w-[265px] h-[548px]"
          src="../../../public/primary-imgs/OtherBackPhone.webp"
          alt=""
        />
        <img
          className="back2 absolute top-[74px] left-[23.25rem] w-[265px] h-[548px]"
          src="../../../public/primary-imgs/backgrounPhone.webp"
          alt=""
        />
        <img
          className="back3 absolute top-[74px] left-[23.25rem] w-[265px] h-[548px]"
          src="../../../public/primary-imgs/back3.webp"
          alt=""
        />
      </div>
    </>
  );
}
