import Link from "next/link";
import { WatchedSvg } from "@/components/WatchedSvg";

const UserDashboard = () => {
  return (
    <div className="inline--nav">
      <WatchedSvg width={28} />
      <div className="nav__item">
        <div className="nav__text">
          <Link
            href="#listGoodsLeft"
            scroll={false}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("listGoodsLeft")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            Переглянуті товари
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
