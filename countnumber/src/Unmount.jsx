import { useEffect } from "react"

const Unmount = () => {
    useEffect(() => {
        return () => {
            console.log("unmount");
        };
    }, []);
    return <div>4로 나눠 떨어짐</div>
}
export default Unmount;