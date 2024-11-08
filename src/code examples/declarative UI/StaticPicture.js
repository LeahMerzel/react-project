import logo from '../../assets/logo.jpeg'; 

export default function Picture() {
    return (
      <div className="background background--active">
        <img
          className="picture"
          alt="React logo"
          src={logo}
        />
      </div>
    );
  }
  