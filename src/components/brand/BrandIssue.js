import object_03 from "../../assets/Images/news-object-03.png";
import object_02 from "../../assets/Images/news-object-02.png";
import news_img_01 from "../../assets/Images/news-img-01.png";
import news_img_02 from "../../assets/Images/news-object-03@2x.png";
import news_img_03 from "../../assets/Images/news-object-04.png";
import news_img_04 from "../../assets/Images/news-object-05.png";
import BrandCard from "./BrandCard";
import { brand } from "../../assets/data";
const BrandIssue = () => {
  return (
    <div className="brand-issue">
      <img className="brand-issue_img-3" src={object_03} alt="" />
      <img className="brand-issue_img-2" src={object_02} alt="" />
      <h1 className="brand-issue_title">Happened’s issue</h1>
      <p className="brand-issue_content">
        모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
        아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫
        걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
      </p>
      <button className="brand-issue_button">SEE MORE</button>
      <div className="brand-issue_brand">
        <div className="grid grid-col-5">
          <div class="brand-issue_brand_issue">
            <h1 class="brand-issue_brand_issue_title">whpn issue</h1>
            <img class="brand-issue_brand_issue_01" src={news_img_01} alt="" />
            <img class="brand-issue_brand_issue_02" src={news_img_02} alt="" />
            <img class="brand-issue_brand_issue_03" src={news_img_03} alt="" />
            <img class="brand-issue_brand_issue_04" src={news_img_04} alt="" />
          </div>
          {brand.map((item, index) => (
            <BrandCard key={index} img={item.img} title={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandIssue;
