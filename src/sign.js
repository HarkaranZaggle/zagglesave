import React, { useState } from "react";
import { Input, Select,Button,Row,Col,Icon,Form  } from "antd";
import FloatLabel from "./floatinglabel";

import "antd/dist/antd.css";
import "./App.css";

const { Option } = Select;


const SignupForm = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [companyName, setCompanyName] = useState("Zaggle Prepaid ocean services pvt ltd");
  const [emailId, setEmailId] = useState();
  const [phoneNum, setPhoneNum] = useState();
  const [numEmpl, setNumEmpl] = useState();
  const [password, setPassword] = useState();
  const [selectValue, setSelectValue] = useState();

  const dropdown =<Icon type="caret-down" opacity={1}/>

  const ItemLayout = {
    style: {margin: 1 
    }
  };

  

  return (
    <div className="bgc">
    <div className="img"></div>
      <div className="horizalign">    
        <b>Start your 28 days free trial now</b>
    </div>
    <div >
    <Form >
        
        <Row gutter={1}>
          <Col span={3} offset={9}  >
        
      <FloatLabel  label="First Name" name="firstName" value={firstName} >
          <Form.Item {...ItemLayout}>
        <Input  size="large" value={firstName} onChange={e => setFirstName(e.target.value)} />
        </Form.Item>
      </FloatLabel>
      </Col>
        <Col span={3} >
      <FloatLabel label="Last Name" name="lastName" value={lastName}>
      <Form.Item {...ItemLayout}>
        <Input  size="large"  value={lastName} onChange={e => setLastName(e.target.value)} />
        </Form.Item>
      </FloatLabel>
      </Col>
      </Row>
      <Row >
          <Col  span={6} offset={9}  >
      <FloatLabel label="Company name" name="companyName" value={companyName} >
      <Form.Item {...ItemLayout}>
        <Input  size="large" value={companyName} onChange={e => setCompanyName(e.target.value)} />
        </Form.Item>
      </FloatLabel>
      </Col>
      </Row>
      <Row >
          <Col  span={6} offset={9} >
      <FloatLabel label="Email id" name="emailId" value={emailId} >
      <Form.Item {...ItemLayout}>
        <Input size="large" value={emailId} onChange={e => setEmailId(e.target.value)}  />
        </Form.Item>
      </FloatLabel>
      </Col>
      </Row>
      <Row >
          <Col  span={6} offset={9}>
      <FloatLabel label="Phone no." name="phoneNum" value={phoneNum} >
      <Form.Item {...ItemLayout}>
      <Input size="large" value={phoneNum} onChange={e => setPhoneNum(e.target.value)} />
        </Form.Item>
      </FloatLabel>
      </Col>
      </Row>
      <Row gutter={1} >
          <Col  span={3} offset={9}>
      <FloatLabel label="Country" name="name" value={selectValue}>
      <Form.Item {...ItemLayout}>
        <Select
          showSearch
          size="large"
          suffixIcon={dropdown}
          style={{ width: "100%" }}
          onChange={value => setSelectValue(value)}
          value={selectValue}
        >
                <Option value="AFG">Afghanistan</Option>
                <Option value="ALA">Åland Islands</Option>
                <Option value="ALB">Albania</Option>
                <Option value="DZA">Algeria</Option>
                <Option value="ASM">American Samoa</Option>
                <Option value="AND">Andorra</Option>
                <Option value="AGO">Angola</Option>
                <Option value="AIA">Anguilla</Option>
                <Option value="ATA">Antarctica</Option>
                <Option value="ATG">Antigua and Barbuda</Option>
                <Option value="ARG">Argentina</Option>
                <Option value="ARM">Armenia</Option>
                <Option value="ABW">Aruba</Option>
                <Option value="AUS">Australia</Option>
                <Option value="AUT">Austria</Option>
                <Option value="AZE">Azerbaijan</Option>
                <Option value="BHS">Bahamas</Option>
                <Option value="BHR">Bahrain</Option>
                <Option value="BGD">Bangladesh</Option>
                <Option value="BRB">Barbados</Option>
                <Option value="BLR">Belarus</Option>
                <Option value="BEL">Belgium</Option>
                <Option value="BLZ">Belize</Option>
                <Option value="BEN">Benin</Option>
                <Option value="BMU">Bermuda</Option>
                <Option value="BTN">Bhutan</Option>
                <Option value="BOL">Bolivia, Plurinational State of</Option>
                <Option value="BES">Bonaire, Sint Eustatius and Saba</Option>
                <Option value="BIH">Bosnia and Herzegovina</Option>
                <Option value="BWA">Botswana</Option>
                <Option value="BVT">Bouvet Island</Option>
                <Option value="BRA">Brazil</Option>
                <Option value="IOT">British Indian Ocean Territory</Option>
                <Option value="BRN">Brunei Darussalam</Option>
                <Option value="BGR">Bulgaria</Option>
                <Option value="BFA">Burkina Faso</Option>
                <Option value="BDI">Burundi</Option>
                <Option value="KHM">Cambodia</Option>
                <Option value="CMR">Cameroon</Option>
                <Option value="CAN">Canada</Option>
                <Option value="CPV">Cape Verde</Option>
                <Option value="CYM">Cayman Islands</Option>
                <Option value="CAF">Central African Republic</Option>
                <Option value="TCD">Chad</Option>
                <Option value="CHL">Chile</Option>
                <Option value="CHN">China</Option>
                <Option value="CXR">Christmas Island</Option>
                <Option value="CCK">Cocos (Keeling) Islands</Option>
                <Option value="COL">Colombia</Option>
                <Option value="COM">Comoros</Option>
                <Option value="COG">Congo</Option>
                <Option value="COD">Congo, the Democratic Republic of the</Option>
                <Option value="COK">Cook Islands</Option>
                <Option value="CRI">Costa Rica</Option>
                <Option value="CIV">Côte d'Ivoire</Option>
                <Option value="HRV">Croatia</Option>
                <Option value="CUB">Cuba</Option>
                <Option value="CUW">Curaçao</Option>
                <Option value="CYP">Cyprus</Option>
                <Option value="CZE">Czech Republic</Option>
                <Option value="DNK">Denmark</Option>
                <Option value="DJI">Djibouti</Option>
                <Option value="DMA">Dominica</Option>
                <Option value="DOM">Dominican Republic</Option>
                <Option value="ECU">Ecuador</Option>
                <Option value="EGY">Egypt</Option>
                <Option value="SLV">El Salvador</Option>
                <Option value="GNQ">Equatorial Guinea</Option>
                <Option value="ERI">Eritrea</Option>
                <Option value="EST">Estonia</Option>
                <Option value="ETH">Ethiopia</Option>
                <Option value="FLK">Falkland Islands (Malvinas)</Option>
                <Option value="FRO">Faroe Islands</Option>
                <Option value="FJI">Fiji</Option>
                <Option value="FIN">Finland</Option>
                <Option value="FRA">France</Option>
                <Option value="GUF">French Guiana</Option>
                <Option value="PYF">French Polynesia</Option>
                <Option value="ATF">French Southern Territories</Option>
                <Option value="GAB">Gabon</Option>
                <Option value="GMB">Gambia</Option>
                <Option value="GEO">Georgia</Option>
                <Option value="DEU">Germany</Option>
                <Option value="GHA">Ghana</Option>
                <Option value="GIB">Gibraltar</Option>
                <Option value="GRC">Greece</Option>
                <Option value="GRL">Greenland</Option>
                <Option value="GRD">Grenada</Option>
                <Option value="GLP">Guadeloupe</Option>
                <Option value="GUM">Guam</Option>
                <Option value="GTM">Guatemala</Option>
                <Option value="GGY">Guernsey</Option>
                <Option value="GIN">Guinea</Option>
                <Option value="GNB">Guinea-Bissau</Option>
                <Option value="GUY">Guyana</Option>
                <Option value="HTI">Haiti</Option>
                <Option value="HMD">Heard Island and McDonald Islands</Option>
                <Option value="VAT">Holy See (Vatican City State)</Option>
                <Option value="HND">Honduras</Option>
                <Option value="HKG">Hong Kong</Option>
                <Option value="HUN">Hungary</Option>
                <Option value="ISL">Iceland</Option>
                <Option value="IND">India</Option>
                <Option value="IDN">Indonesia</Option>
                <Option value="IRN">Iran, Islamic Republic of</Option>
                <Option value="IRQ">Iraq</Option>
                <Option value="IRL">Ireland</Option>
                <Option value="IMN">Isle of Man</Option>
                <Option value="ISR">Israel</Option>
                <Option value="ITA">Italy</Option>
                <Option value="JAM">Jamaica</Option>
                <Option value="JPN">Japan</Option>
                <Option value="JEY">Jersey</Option>
                <Option value="JOR">Jordan</Option>
                <Option value="KAZ">Kazakhstan</Option>
                <Option value="KEN">Kenya</Option>
                <Option value="KIR">Kiribati</Option>
                <Option value="PRK">Korea, Democratic People's Republic of</Option>
                <Option value="KOR">Korea, Republic of</Option>
                <Option value="KWT">Kuwait</Option>
                <Option value="KGZ">Kyrgyzstan</Option>
                <Option value="LAO">Lao People's Democratic Republic</Option>
                <Option value="LVA">Latvia</Option>
                <Option value="LBN">Lebanon</Option>
                <Option value="LSO">Lesotho</Option>
                <Option value="LBR">Liberia</Option>
                <Option value="LBY">Libya</Option>
                <Option value="LIE">Liechtenstein</Option>
                <Option value="LTU">Lithuania</Option>
                <Option value="LUX">Luxembourg</Option>
                <Option value="MAC">Macao</Option>
                <Option value="MKD">Macedonia, the former Yugoslav Republic of</Option>
                <Option value="MDG">Madagascar</Option>
                <Option value="MWI">Malawi</Option>
                <Option value="MYS">Malaysia</Option>
                <Option value="MDV">Maldives</Option>
                <Option value="MLI">Mali</Option>
                <Option value="MLT">Malta</Option>
                <Option value="MHL">Marshall Islands</Option>
                <Option value="MTQ">Martinique</Option>
                <Option value="MRT">Mauritania</Option>
                <Option value="MUS">Mauritius</Option>
                <Option value="MYT">Mayotte</Option>
                <Option value="MEX">Mexico</Option>
                <Option value="FSM">Micronesia, Federated States of</Option>
                <Option value="MDA">Moldova, Republic of</Option>
                <Option value="MCO">Monaco</Option>
                <Option value="MNG">Mongolia</Option>
                <Option value="MNE">Montenegro</Option>
                <Option value="MSR">Montserrat</Option>
                <Option value="MAR">Morocco</Option>
                <Option value="MOZ">Mozambique</Option>
                <Option value="MMR">Myanmar</Option>
                <Option value="NAM">Namibia</Option>
                <Option value="NRU">Nauru</Option>
                <Option value="NPL">Nepal</Option>
                <Option value="NLD">Netherlands</Option>
                <Option value="NCL">New Caledonia</Option>
                <Option value="NZL">New Zealand</Option>
                <Option value="NIC">Nicaragua</Option>
                <Option value="NER">Niger</Option>
                <Option value="NGA">Nigeria</Option>
                <Option value="NIU">Niue</Option>
                <Option value="NFK">Norfolk Island</Option>
                <Option value="MNP">Northern Mariana Islands</Option>
                <Option value="NOR">Norway</Option>
                <Option value="OMN">Oman</Option>
                <Option value="PAK">Pakistan</Option>
                <Option value="PLW">Palau</Option>
                <Option value="PSE">Palestinian Territory, Occupied</Option>
                <Option value="PAN">Panama</Option>
                <Option value="PNG">Papua New Guinea</Option>
                <Option value="PRY">Paraguay</Option>
                <Option value="PER">Peru</Option>
                <Option value="PHL">Philippines</Option>
                <Option value="PCN">Pitcairn</Option>
                <Option value="POL">Poland</Option>
                <Option value="PRT">Portugal</Option>
                <Option value="PRI">Puerto Rico</Option>
                <Option value="QAT">Qatar</Option>
                <Option value="REU">Réunion</Option>
                <Option value="ROU">Romania</Option>
                <Option value="RUS">Russian Federation</Option>
                <Option value="RWA">Rwanda</Option>
                <Option value="BLM">Saint Barthélemy</Option>
                <Option value="SHN">Saint Helena, Ascension and Tristan da Cunha</Option>
                <Option value="KNA">Saint Kitts and Nevis</Option>
                <Option value="LCA">Saint Lucia</Option>
                <Option value="MAF">Saint Martin (French part)</Option>
                <Option value="SPM">Saint Pierre and Miquelon</Option>
                <Option value="VCT">Saint Vincent and the Grenadines</Option>
                <Option value="WSM">Samoa</Option>
                <Option value="SMR">San Marino</Option>
                <Option value="STP">Sao Tome and Principe</Option>
                <Option value="SAU">Saudi Arabia</Option>
                <Option value="SEN">Senegal</Option>
                <Option value="SRB">Serbia</Option>
                <Option value="SYC">Seychelles</Option>
                <Option value="SLE">Sierra Leone</Option>
                <Option value="SGP">Singapore</Option>
                <Option value="SXM">Sint Maarten (Dutch part)</Option>
                <Option value="SVK">Slovakia</Option>
                <Option value="SVN">Slovenia</Option>
                <Option value="SLB">Solomon Islands</Option>
                <Option value="SOM">Somalia</Option>
                <Option value="ZAF">South Africa</Option>
                <Option value="SGS">South Georgia and the South Sandwich Islands</Option>
                <Option value="SSD">South Sudan</Option>
                <Option value="ESP">Spain</Option>
                <Option value="LKA">Sri Lanka</Option>
                <Option value="SDN">Sudan</Option>
                <Option value="SUR">Suriname</Option>
                <Option value="SJM">Svalbard and Jan Mayen</Option>
                <Option value="SWZ">Swaziland</Option>
                <Option value="SWE">Sweden</Option>
                <Option value="CHE">Switzerland</Option>
                <Option value="SYR">Syrian Arab Republic</Option>
                <Option value="TWN">Taiwan, Province of China</Option>
                <Option value="TJK">Tajikistan</Option>
                <Option value="TZA">Tanzania, United Republic of</Option>
                <Option value="THA">Thailand</Option>
                <Option value="TLS">Timor-Leste</Option>
                <Option value="TGO">Togo</Option>
                <Option value="TKL">Tokelau</Option>
                <Option value="TON">Tonga</Option>
                <Option value="TTO">Trinidad and Tobago</Option>
                <Option value="TUN">Tunisia</Option>
                <Option value="TUR">Turkey</Option>
                <Option value="TKM">Turkmenistan</Option>
                <Option value="TCA">Turks and Caicos Islands</Option>
                <Option value="TUV">Tuvalu</Option>
                <Option value="UGA">Uganda</Option>
                <Option value="UKR">Ukraine</Option>
                <Option value="ARE">United Arab Emirates</Option>
                <Option value="GBR">United Kingdom</Option>
                <Option value="USA">United States</Option>
                <Option value="UMI">United States Minor Outlying Islands</Option>
                <Option value="URY">Uruguay</Option>
                <Option value="UZB">Uzbekistan</Option>
                <Option value="VUT">Vanuatu</Option>
                <Option value="VEN">Venezuela, Bolivarian Republic of</Option>
                <Option value="VNM">Viet Nam</Option>
                <Option value="VGB">Virgin Islands, British</Option>
                <Option value="VIR">Virgin Islands, U.S.</Option>
                <Option value="WLF">Wallis and Futuna</Option>
                <Option value="ESH">Western Sahara</Option>
                <Option value="YEM">Yemen</Option>
                <Option value="ZMB">Zambia</Option>
                <Option value="ZWE">Zimbabwe</Option>
        </Select>
        </Form.Item>
      </FloatLabel>
      </Col>
      <Col span={3}>
      <FloatLabel label="No. of Employees" name="numEmpl" value={numEmpl}>
      <Form.Item {...ItemLayout}>
        <Input size="large" value={numEmpl} onChange={e => setNumEmpl(e.target.value)} />
        </Form.Item>
      </FloatLabel>
      </Col>
      </Row>
      <Row >
          <Col  span={6} offset={9}>
      <FloatLabel label="Password" name="password" value={password} >
      <Form.Item {...ItemLayout}>
        <Input.Password size="large" value={password} onChange={e => setPassword(e.target.value)} />
        </Form.Item>
      </FloatLabel>
      </Col>
      </Row>
      <Row >
          <Col  span={6} offset={9}>
          <Form.Item {...ItemLayout}>
      <Button size="large" className="submitbutton" htmlType="submit" block>
            SIGN UP
          </Button>
          </Form.Item>
          </Col>
      </Row>
      </Form>
    </div>
    <Row >
        <Col span={6} offset={9}>
        <div className="login">
      Already have an account? <a href="">Login</a>
      </div>
      </Col>
      </Row>
      <Row>
        <Col span={6} offset={9}>
        <div className="login">
      By clicking on SIGN UP you agree to our <a href="" className="black"><b> terms & conditions</b></a> and you 
      acknowledge having read our <a href="" className="black"><b> privacy policy</b></a>.
      </div>
      </Col>
    </Row>
    </div>
  );
};


const WrappedSignupForm = Form.create({ name: 'SignupForm' })(SignupForm);

export default WrappedSignupForm;
