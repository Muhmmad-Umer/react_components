import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  const handleClick = () => {};

  return (
    <div>
      <div>
        <Button success className="mb-5" onClick={handleClick}>
          <GoBell />
          Hi
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Buy now
        </Button>
      </div>
      <div>
        <Button secondary outline>
          <GoCloudDownload />
          Bruasdasdav
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          Yeeee
        </Button>
      </div>
      <div>
        <Button danger>Kekw</Button>
      </div>
      <div>
        <Button>GG</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
