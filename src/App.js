import { useEffect } from 'react'
import { HostedFields, FieldTypes } from 'hosted-fields-sdk'
import "./styles.css";

const style = `
  /* RenderAsFloatingLabel */

  .single-iframe-input-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  /* Creditcard field */
  .single-iframe-input-container > div:nth-child(1),
  .single-iframe-input-container > div:nth-child(2) {
    width: 100%;
    margin-bottom: 14px;
  }

  .single-iframe-input-container > div {
    width: calc(50% - 7px);
  }

  .hosted-input-container .input-container input {
    border-radius: 2px!important;
    font-size: 14px;
  }

  #cvv-icon-container .icon {
    null
  }

  .creditcardNumber-container #creditcard-icon-container .creditcard-icon.default {
    null
  }

  #expiry_mm_yyyy-icon-container .icon {
    null
  }

  .label-input-floating {
    top: 32.5%!important;
    color: #222324 !important;
    font-size: 14px !important;
    opacity: 0.7 !important;
  }

  .label-input-floating.active {
    margin-top: -12px !important;
  }

  #label-cccard.label-input-floating.active,
  .hosted-input-container .input-container .label-input-floating.active {
    padding-left:46px!important;
    transform: scale(1)!important;
    font-size: 0.8rem!important;
  }


  html {
    background-color: transparent !important;
    min-width: 0;
  }

  .hosted-input-container {
    margin: 0px;
    background-color: transparent;
  }

  .control:not(:last-child) {
    margin-bottom: 0;
  }

  .label {
    display: none;
    color: rgb(65, 65, 65); 
    font-weight: normal;
    margin-bottom: 0px !important;
  }

  .input:focus {
    border-color:  #989898 !important;
  }

  ::placeholder {
    color: #222324;
  }  

  .hosted-input-container .input-container input {
    height: 52px;
    font-size: 14px;
    border-color:  #cccccc ;
    color: #222324; 
    background-color: #ffffff !important; 
    box-shadow: none;
    border-radius: 2px;
    letter-spacing: 0;
  }

  .creditcardNumber-container input, .cvv-container input, #expirymmyyyy-input {
    letter-spacing: 1.7px;
  }

  .cvv-container input {
    background-color: #ffffff !important;
  }

  .hosted-input-container .input-container {
    overflow: hidden;
  }
  .hosted-input-container .input-container input.error {
    border: 1px solid #ff3767 !important;
    opacity: 0.6;
  }
  .hosted-input-container .input-container input.error:focus {
    border: 1px solid  #cccccc !important;
    opacity: 1;
  }`


export default function App() {

  useEffect(() => {
    // Configure your fields
  let fieldConfig = [
    {
        error: 'Hello there its an error1',
        type: FieldTypes.TEXT,
        id: 'frmNameCC',
        autocomplete: 'cc-name',
        key: 'creditcard.main.name',
        helpKey: 'Testing',
        helpkey: 'Testing',
        name: 'ccname',
        noAttributeValueFormatting: true,
        required: true,
        requiredNewPayment: true,
        requiredRepeatPayment: false,
        showIcon: true,
        value: undefined,
        visible: true,
        visibleOnNewPayment: true,
        visibleOnRepeatPayment: false
    },
    {
        error: 'Hello there its an error2',
        type: FieldTypes.CREDITCARD_NUMBER,
        autocomplete: "cc-number",
        helpKey: "Kortnummer",
        id: "frmCCNum",
        key: "creditcard.main.number",
        name: "cardnumber",
        noAttributeValueFormatting: true,
        required: true,
        requiredNewPayment: true,
        requiredRepeatPayment: false,
        showIcon: true,
        value: undefined,
        visible: true,
        visibleOnNewPayment: true,
        visibleOnRepeatPayment: false
    },
    {
        error: 'Hello there its an error3',
        type: FieldTypes.EXPIRY_MM_YYYY,
        autocomplete: "cc-exp",
        helpKey: "•• / ••",
        id: "frmCCExp",
        key: "creditcard.main.expirymmyyyy",
        name: "cc-exp",
        noAttributeValueFormatting: true,
        pattern: "[0-9]*",
        required: true,
        requiredNewPayment: true,
        requiredRepeatPayment: false,
        showIcon: true,
        value: undefined,
        visible: true,
        visibleOnNewPayment: true,
        visibleOnRepeatPayment: false
    },
    {
        error: 'Hello there its an error4',
        type: FieldTypes.CVV,
        autocomplete: "cc-csc",
        helpKey: "Security Code",
        id: "frmCCCVC",
        key: "creditcard.main.cvc",
        name: "cvc",
        noAttributeValueFormatting: true,
        pattern: "[0-9]*",
        required: true,
        requiredNewPayment: true,
        requiredRepeatPayment: true,
        showIcon: true,
        value: undefined,
        visible: true,
        visibleOnNewPayment: true,
        visibleOnRepeatPayment: true
    }
  ]

  const ligthTheme = `
  .single-iframe-input-container {
    background: lightblue;
    padding: 15px;
  }
  input.input {
    background: white;
  }
  `
  const darkTheme = `
  .single-iframe-input-container {
    background: darkblue;
    padding: 15px;
  }
  input.input {
    background: white;
  }
  `

    HostedFields.setup({
      merchantId: 1014,
      renderMode: 'single', // render all fields in a single iframe
      hostedfieldsurl: 'https://hostedpages.paymentiq.io/1.0.35/index.html',
      // hostedfieldsurl: 'https://test-hostedpages.paymentiq.io/1.0.34-beta-1/index.html',
      // hostedfieldsurl: 'http://localhost:9998/',
      fields: fieldConfig,
      service: '',
      styles: style,
      callback: () => {},
      onLoadCallback: () => { return () => {} },
      autoFocusNext: true,
      el: `#hosted-fields-wrapper`
    })
  })

  const x = () => {
    const p = HostedFields.get()
    console.log(p)
  }

  return (
    <div className="App">
      {/* <button onClick={x}>Test</button> */}
      <h1>Hosted fields SDK sandbox</h1>
      <div id='hosted-fields-wrapper' />
    </div>
  );
}
