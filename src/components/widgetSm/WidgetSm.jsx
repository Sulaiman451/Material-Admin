import React from './WidgetSm.css'
import { Visibility } from '@material-ui/icons'

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Newly Joined Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Shanice Michaels</span>
            <span className="widgetSmUserTitle">Web Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Shanice Michaels</span>
            <span className="widgetSmUserTitle">Web Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Shanice Michaels</span>
            <span className="widgetSmUserTitle">Web Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Shanice Michaels</span>
            <span className="widgetSmUserTitle">Web Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Shanice Michaels</span>
            <span className="widgetSmUserTitle">Web Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  )
}
