import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
        Meet our intelligent companion – your personal guide in the digital realm. Our bot is more than just lines of code; it's a friendly aide that engages in conversations, provides valuable insights, and adapts to your needs. Whether decoding medical reports or assisting with daily queries, the bot is here to make your interactions seamless and enriching. Together, we and the bot embark on a mission to redefine how technology serves you.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="🔍 Deep Insights from Medical Reports"
          description="Upload your medical reports, and let HealthBot work its magic. With its advanced analytical capabilities, HealthBot can read, interpret, and provide insights from your medical records. Receive personalized recommendations based on your health history, potential risk factors, and areas for improvement."
          icon={faHeartPulse}
        />

        <InformationCard
          title="🧠 Continuous Learning and Adaptation"
          description="HealthBot is not static; it evolves with the latest medical advancements. Regular updates ensure that HealthBot stays informed about the newest treatments, medications, and healthcare trends. This means you receive the most relevant and accurate information every time you engage with HealthBot."
          icon={faHeartPulse}
        />

        <InformationCard
          title="🤝 Collaborative Healthcare Approach,Secure and Private"
          description="HealthBot is designed to complement your existing healthcare team. It encourages open communication between you and your healthcare providers, helping bridge gaps in understanding and facilitating more informed discussions during your medical appointments."
          icon={faHeartPulse}
        />

      </div>
    </div>
  );
}

export default Info;
