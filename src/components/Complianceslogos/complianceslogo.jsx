import LogoCard from "./logocard.jsx";

export default function CompliancesLogo() {

  return (
    <>
      <section className="pb-100 pt-100">
        <div className="container">
          <div className="row justify-content-around">
            <LogoCard
              logoUrl="assets/img/logo/VEG_logo png.png"
              title="My Company"
              description="We provide awesome services!"
              filename = "file-1"
            />
            <LogoCard
              logoUrl="assets/img/logo/VEG_logo png.png"
              title="Another Company"
              description="Making the web better."
              filename = "file-2"
            />
             <LogoCard
              logoUrl="assets/img/logo/VEG_logo png.png"
              title="Another Company"
              description="Making the web better."
              filename = "file-3"
            />
             <LogoCard
              logoUrl="assets/img/logo/VEG_logo png.png"
              title="Another Company"
              description="Making the web better."
              filename = "file-4"
            />
            <LogoCard
              logoUrl="assets/img/logo/VEG_logo png.png"
              title="My Company"
              description="We provide awesome services!"
              filename = "file-5"
            />
            <LogoCard
              logoUrl="assets/img/logo/VEG_logo png.png"
              title="Another Company"
              description="Making the web better."
              filename = "file-6"
            />
          </div>
        </div>
      </section>
    </>
  );
}
