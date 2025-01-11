/* eslint-disable react/prop-types */
import bckg from "../../../assets/imgs/background-banner.webp";
function PageLayout({ children, className }) {
  return (
    <div
      style={{
        position: "relative",
        backgroundImage: `url(${bckg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
      }}
      className={className}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.1)",
        }}
      />
      <div style={{ position: "relative" }}>{children}</div>
    </div>
  );
}
export default PageLayout;
