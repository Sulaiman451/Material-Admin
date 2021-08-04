import React from 'react'
import './TopBar.css'
import { NotificationsNone, Language, Settings } from '@material-ui/icons'

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Material-Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">
              2
            </span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">
              2
            </span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://www.gettyimages.co.uk/detail/photo/handsome-young-adult-businessman-with-stubble-royalty-free-image/1250238624" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  )
}
