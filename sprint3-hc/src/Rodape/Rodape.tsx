import { useNavigate } from "react-router-dom";


export default function Rodape() {
    const navigate = useNavigate();
    
    const handleNavigation = (path: string) => {
      navigate(path);
    };
    return(
        <div>
            
        </div>
    )
}