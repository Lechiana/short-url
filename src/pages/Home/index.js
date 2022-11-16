import { useState } from "react";
import { FiLink } from "react-icons/fi";
import "./home.css";
import Menu from "../../components/Menu";
import LinkItem from "../../components/LinkItem";
import api from "../../services/api";
import { saveLink } from "../../services/storeLinks";

export default function Home() {
  const [link, setLink] = useState("");
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);

  async function handleShortLink() {
    try {
      const response = await api.post("/shorten", { long_url: link });
      setData(response.data);
      setShowModal(true);
      saveLink("@shortLink", response.data);
      setLink("");
    } catch {
      alert("มีบางอย่างผิดพลาด!");
      setLink("");
    }
  }

  return (
    <div className="container-home">
      <div className="logo">
        <h1>SHORT URL</h1>
        <span>วาง Link ของคุณเพื่อสร้าง Short URL</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color="#FFF" />
          <input
            placeholder="วาง Link ที่นี่..."
            value={link}
            onChange={(e) => {
              setLink(e.target.value);
            }}
          />
        </div>

        <button onClick={handleShortLink}>สร้าง Short URL</button>
      </div>

      <Menu />
      {showModal && (
        <LinkItem closeModal={() => setShowModal(false)} content={data} />
      )}
    </div>
  );
}
