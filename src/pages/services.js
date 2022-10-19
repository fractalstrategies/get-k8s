import BasicCard from "../components/card"

export default function Services(props) {
  return (
    <div>
      <h1>Services</h1>

      <div style={{ width: '80%', margin: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
        <BasicCard text1='Service' text2='Containerization' text3='action' text4='a form of virtualization where applications run in isolated user spaces, called containers, while using the same shared operating system' />
        <BasicCard text1='Service' text2='Provisioning' text3='action' text4='preparing and equipping a network to allow it to provide new services to its users' />
        <BasicCard text1='Service' text2='Deployment' text3='asset' text4='' />
        <BasicCard text1='Service' text2='Monitoring' text3='asset' text4='' />
        <BasicCard text1='Service' text2='Alerts' text3='asset' text4='' />
        <BasicCard text1='Service' text2='Orchestration' text3='asset' text4='' />
        <BasicCard text1='Service' text2='Infra-as-Code' text3='asset' text4='' />
        <BasicCard text1='Outcome' text2='Reliability' text3='value' text4='' />
        <BasicCard text1='Outcome' text2='Security' text3='value' text4='' />
        <BasicCard text1='Outcome' text2='Ease of mind' text3='value' text4='' />
        <BasicCard text1='Capability' text2='Scalability' text3='feature' text4='' />
        <BasicCard text1='Service' text2='Jokes' text3='rare item' text4='' />
      </div>

    </div>
  )
}
