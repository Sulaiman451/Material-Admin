import Chart from '../../charts/Chart'
import FeaturedInfo from '../../featuredInfo/FeaturedInfo'
import './Home.css'
import { userData } from "../../../dummyData";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active Users" />
    </div>
  )
}
