function Doyeon() {
    return (  
        <div>
            <p>홍길동</p>
            <p>10</p>
            <p>인천</p>
        </div>

    );
}

// export default Doyeon;

const  Doyeon2 = () => {
    var array=['songpa@naver.com', '010-1234-1234'];
    let arrays=array.map((item) => <p>{item}</p>)
    return (arrays);
}
 
export default Doyeon2;