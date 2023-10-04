import './userlist.css'

const Userlistbody = () => {
  return (
    <>
      <div className="userlistbody">
        <div className="userlistboodyimg">
          <img
            src="https://www.freecodecamp.org/news/content/images/2022/02/arrows-2889040_1920.jpg"
            alt=""
          />
        </div>
        <div className="userbodyname">
          <span>uday chauhan</span>
          <span className="usernamestatus">online</span>
        </div>
      </div>
    </>
  );
};

export default Userlistbody;
