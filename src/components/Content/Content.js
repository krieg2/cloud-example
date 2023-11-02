import './Content.css';

const Content = () => {
    return (
        <div className="content">
            <div className="breadcrumb">
                <span>{`Lorem Ipsum > Donec Lorem Magna`}</span>
            </div>

            <a href="#" className="hyperlink">Text Link</a>

            <h1>Donec Lorem Magna</h1>

            <div className="section-one">
                <label for="selector">LABEL</label>
                <select className="selector" name="selector">
                    <option value="1">NUNC LUCTUS VEL TORTOR QUIS SODALES</option>
                </select>
                <button>SUBMIT</button>
            </div>

            <div className="section-two">
                <h3>ABOUT</h3>
                <div className="input-container about">
                    <div>
                        <div className="label"><label for="uid">UNIQUE ID</label></div>
                        <input name="uid" value="34-56789012-3"></input>
                        <label for="aid">ALT ID</label><input name="aid" value=""></input>
                    </div>
                    <div>
                        <div className="label"><label for="dln">DLN</label></div>
                        <input name="dln" value="777-67-7777"></input>
                    </div>
                    <div>
                        <div className="label"><label for="last-name">LAST NAME</label></div>
                        <input name="last-name" value="WAYNE"></input>
                    </div>
                    <div>
                        <div className="label"><label for="given-name">GIVEN NAME</label></div>
                        <input name="given-name" value="BRUCE"></input>
                    </div>
                    <div>
                        <div className="label"><label for="gender">GENDER</label></div>
                        <select className="selector" name="gender">
                            <option value="M">M - MALE</option>
                        </select>
                    </div>
                    <div>
                        <div className="label"><label for="dob">DOB</label></div>
                        <input name="dob" type="date" value="2001-07-31"></input>
                    </div>
                </div>

                <h3>ADDRESS</h3>
                <div className="input-container address">
                    <div>
                        <div className="label"><label for="street">STREET</label></div>
                        <input name="street" value="2043 HILLTOP DR"></input>
                    </div>
                    <div>
                        <div className="label"><label for="city">CITY</label></div>
                        <input name="city" value="LOS ANGELES"></input>
                    </div>
                    <div>
                        <div className="label"><label for="state">STATE</label></div>
                        <select className="selector" name="state">
                            <option value="CA">CA - California</option>
                        </select>
                        <label for="zip">ZIP</label><input name="zip" value="90210"></input>
                    </div>
                    <div>
                        <div className="label"><label for="country">COUNTRY</label></div>
                        <select className="selector" name="country">
                            <option value="CA">UNITED STATES</option>
                        </select>
                    </div>
                </div>

                <h3>CONTACT</h3>
                <div className="input-container contact">
                    <div>
                        <div className="label"><label for="telephone">TELEPHONE</label></div>
                        <input name="telephone" value=""></input>
                    </div>
                    <div>
                        <div className="label"><label for="email">EMAIL</label></div>
                        <input name="email" value=""></input>
                    </div>
                </div>
            </div>

            <h3 className="letterH3">LETTER</h3>
            <div className="section-three">
                <div>
                    <input name="send" type="checkbox"></input>
                    <label for="send">SEND A LETTER</label>

                    <div className="label dateLabel"><label for="date">DATE</label></div>
                    <input name="date" type="date" value="" placeholder=""></input>
                </div>
                <div className="break"></div>
                <div className="commentsContainer">
                    <label for="comments">COMMENTS
                    <textarea rows="4" cols="70"/>
                    <div className="submitButtonContainer">
                        <button className="submitLetterButton">SUBMIT</button>
                        <a href="#">Reset Changes</a>
                    </div>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Content;