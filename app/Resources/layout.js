// Components
import Sidekick from "../components/hero/sidekick/Sidekick";

export default function ResourcesLayout({ children }) {
  return (
    <div className="layoutWrapper">
      <div className="sidekick">
        <Sidekick
          pageTitle="Resources"
          subTitle="For Cattle Producers and Veterinarians"
        />
      </div>

      <div className="backgroundWrap">
        <div className="constructionWrapper">
          <div className="resource-content">
            <main>{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
}
