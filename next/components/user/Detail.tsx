import '../styles/SignUp.css'

export default function UserDetail() {

    return (<>
            <h1>회원정보</h1>
            <div>
                <label htmlFor="user_email">User Email:</label>
                <div id="user_email"></div>

                <label htmlFor="password">Password:</label>
                <div id="password"></div>

                <label htmlFor="user_name">User Name:</label>
                <div id="user_name"></div>

                <label htmlFor="phone">Phone:</label>
                <div id="phone"></div>

                <label htmlFor="birth">Birth:</label>
                <div id="birth"></div>

                <label htmlFor="address">Address:</label>
                <div id="address"></div>

                <label htmlFor="job">Job:</label>
                <div id="job"></div>

                <label htmlFor="user_interests">User Interests:</label>
                <div id="user_interests"></div>

                <button>수정하기</button>
            </div>
        </>
    )
}
