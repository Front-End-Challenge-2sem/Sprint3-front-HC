import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Index() {

  const navigate = useNavigate();
  const [absenteism, setAbsenteism] = useState(20);

  useEffect(() => {
    const interval = setInterval(() => {
      setAbsenteism(prev => {
        if (prev <= 10) {
          clearInterval(interval);
          return 10;
        }
        return prev - 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    
    <main/>
  );
}