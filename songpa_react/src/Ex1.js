// ffc: function 단축키

function Print() {
    return ( 
    <div>it에 오신것을 환영합니다</div>
 );

}
// ff: Printc: export
// export default Print;
// ctrl+shift+r: 파일찾기

// sfc: function 화살표
const Print2 = () => {
    return (  
        <div>화살표는 펑션이다
            안녕하세요 반가워요
        </div>
    );
}

// 기본 export default : 출력할 함수, 펑션, 메소드
export default Print2;