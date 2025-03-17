import React, { Component } from 'react';
import axios from 'axios';
import $ from "jquery";

class Login extends Component {
  constructor(props) {
    super(props);
    this.data = {};
    this.loginFun = this.loginFun.bind(this);
  }
  componentWillUnmount(){
    $(window).off("scroll");
    $('.down_arrow a').off("click");
  }
  jquryEventsHandle(){
    $(window).off("scroll").on("scroll", function(){
			if ($(this).scrollTop() > 30) {
				$('.shipy-login-sec').addClass("form-right");

			}else{
				$('.shipy-login-sec').removeClass("form-right");
			}
    });
    
    $('.down_arrow a').off("click").on("click", function () { 
      var href = $(this).attr('href'); 
     
      $('html, body').animate({
          scrollTop: $(href).offset().top
      }, 800);
      return false;
  });
  }
  
  componentDidUpdate(){
    this.jquryEventsHandle();
  }

  async loginFun(e) {
    e.preventDefault();
    var formdatum = new FormData();
    formdatum.append('userName', this.data.zipUserName.value);
    formdatum.append('password', this.data.zipPassword.value);
    const login = await axios({
      url: "http://localhost/php/" + 'login.php',      
      // url: this.props.app.phpPath + 'login.php',
      method: 'post',
      data: formdatum,
      headers: { 'content-type': 'application/json' }
    });
    if (login.data === 0) {
      alert("Invalid credentials");
    }
    else {
      this.props.setUserData(login.data);
    }
  }

  render() {
    return (
      <>
      <div className="shipy-login-cnt">
        <div className="ship-login-cnt-lf">
          <figure>
            <img src="../images/logo-w.png" />
          </figure>
          {/* <div className="login-cnt-dec">
            <p>
            Zippbuy is a portal designed and robustly built to reduce complexity and monitoring in Maritime Purchase, ranging from sourcing material/equipment to personnel.
			      </p>
            <span>So you can focus on things that matter!</span>
          </div> */}
        </div>
        <div className="shipy-login-sec loginPage">
          <div className="shipy-logo">
            <a href="javascript:;">
              <img src="../images/logo.png" alt="zipbuy" />
            </a>
          </div>
          <div className="ship-login-form">
            <div className="login-form">
              <div className="login-content">
                <h2>Sign in to ZippBuy</h2>
                <p className="login-subtitle">Please enter your credentials to proceed.</p>
                <form>
                  <div className="login-form-group">
                    <label>Username</label>
                    <input
                      ref={(input) => this.data["zipUserName"] = input}
                      type="text"
                      placeholder="Enter your email address"
                      required="" />
                  </div>
                  <div className="login-form-group">
                    <label>Password</label>
                    {/* <a href="javascript:;" className="forgot-pass">Forgot password?</a> */}
                    <input
                      ref={(input) => this.data["zipPassword"] = input}
                      type="password"
                      placeholder="Enter your password"
                      required="" />
                  </div>

                  <div className="login-form-group">
                    <button className="signin" onClick={this.loginFun}>Sign in</button>
                    <p className="dont-acc">
                      Don't have an account?
                        <a href="javascript:;" onClick={this.props.showReg}>Sign up</a>
                    </p>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="down_arrow">
          <a href="#firstBanner">
            <img src="images/down-arrow.png" />
            <span>SCROLL</span>
          </a>
        </div>
      </div>

  <section className="zb-logo-banner-sec" id="firstBanner">
	<figure>
		<img src="../images/group.png" />
	</figure>
	<div className="zb-logo-banner-cnt">
		<p>
    Zippbuy is a portal designed and robustly built to reduce complexity and monitoring in Maritime Purchase.
    {/* <span> So you can focus on things that matter!</span> */}
		</p>
	</div>
</section>   
<section className="log-img-cnt">
	<div className="col-3">
		<p>
			Keep everything under the Management Scanner without disturbing your existing pattern of work. 
		</p>
	</div>
	<div className="col-3">
		<img src="../images/bitmap.png" />
	</div>
	<div className="col-3">
		<img src="../images/loginimg2.png" />
	</div>
</section>
<div className="clearfix"></div>
<section className="zb-logo-banner-sec">
	<figure>
		<img src="../images/group.png" />
	</figure>
	<div className="zb-logo-banner-cnt">
		<p>
    Zippbuy brings all vendors together in one platform and hence no more wasting the day to track orders and shipment.
		</p>
	</div>
</section>
<section className="zb-portal-cnt">
	<div className="zb-portal-sec">
		<figure>
			<img src="../images/bitmap-1.png" />
		</figure>
	</div>
	<div className="zb-portal-li">
		<h3>With the use of this portal, be free from:</h3>
		<ul>
		<li>
		<img src="../images/check-form.png" />
			<span>Complex and costly Ship Manager Purchase portals  and monthly additional expenses to ship manager.</span>
		</li>
		<li>
			<img src="../images/check-form.png" />
		<span>Being tied up to one ship Manager.</span>

		</li>
		<li>
		<img src="../images/check-form.png" />
			<span>Reminders for payments.</span>
		</li>
		<li>
		<img src="../images/check-form.png" />
			<span>Undesired variance in new financial year.</span>

		</li>
			
		</ul>
	</div>
</section>
<div className="clearfix"></div>
<section className="footer" id="footer">
	<footer>
		<div className="footer-logo">
			<figure>
			<img src="../images/logo-w.png" />
		</figure>
		</div>
		<div className="copy-rights">
			<span>Copyrights@2019</span>
		</div>
	</footer>
</section>
      </>
    );
  }
}

export default Login;
