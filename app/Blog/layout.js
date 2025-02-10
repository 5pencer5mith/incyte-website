import Sidekick from "../components/hero/sidekick/Sidekick";

export default function BlogLayout({ children }) {
  return (
    <div className="layoutWrapper">
      <div className="sidekick">
        <Sidekick
          pageTitle="Sperm In-Cyte Blog"
          subTitle="Stay Up To Date With Sperm-Incyte"
        />
      </div>

      <div className="backgroundWrap">
        <div className="blogContentWrapper">
          <div className="blogContent">
            <main>{children}</main>
          </div>
        </div>
      </div>

      <div className="backgroundWrap">
        <div className="feedback">
          <h3>Let us know your thoughts - Send your feedback to [ email ]</h3>
        </div>
      </div>
    </div>
  );
}
