import { Link } from 'react-router-dom'
import { CalendarToday, LocationSearching, MailOutlined, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons'
import './User.css'

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
        <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userDisplay">
          <div className="userDisplayTop">
            <img src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="userDisplayImage" />
            <div className="userDisplayTopTitle">
              <span className="userDisplayUsername">Stasya Zefana</span>
              <span className="userDisplayUserTitle">Fashion Designer</span>
            </div>
          </div>
          <div className="userDisplayBottom">
            <span className="userDisplayTitle">Acccount Details</span>
            <div className="userDisplayInfo">
            <PermIdentity className="userDisplayIcon" />
            <span className="userDisplayInfoTitle">stasyaz</span>
            </div>
            <div className="userDisplayInfo">
            <CalendarToday className="userDisplayIcon" />
            <span className="userDisplayInfoTitle">21/02/1994</span>
            </div>
            <span className="userDisplayTitle">Contact Details</span>
            <div className="userDisplayInfo">
            <PhoneAndroid className="userDisplayIcon" />
            <span className="userDisplayInfoTitle">+44-111-2222-333</span>
            </div>
            <div className="userDisplayInfo">
            <MailOutlined className="userDisplayIcon" />
            <span className="userDisplayInfoTitle">stasya.z@gmail.com</span>
            </div>
            <div className="userDisplayInfo">
            <LocationSearching className="userDisplayIcon" />
            <span className="userDisplayInfoTitle">Hertfordshire | UK</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input type="text" placeholder="stasyaz" className="userUpdateInput" />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input type="text" placeholder="Stasya Zefana" className="userUpdateInput" />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input type="text" placeholder="stasya.z@gmail.com" className="userUpdateInput" />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input type="text" placeholder="+44 1111 2222 33" className="userUpdateInput" />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input type="text" placeholder="Hertfordshire | UK" className="userUpdateInput" />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img className="userUpdateImage" src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                <label htmlFor="file"><Publish className="userUpdateIcon" /></label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
