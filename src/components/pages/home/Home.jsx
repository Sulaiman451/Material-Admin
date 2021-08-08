import Chart from '../../charts/Chart'
import FeaturedInfo from '../../featuredInfo/FeaturedInfo'
import './Home.css'
import { userData } from "../../../dummyData";
import WidgetSm from '../../widgetSm/WidgetSm';
import WidgetLg from '../../widgetLg/WidgetLg';

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active Users" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}
