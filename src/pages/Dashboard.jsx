import tw from 'twin.macro'
import 'styled-components/macro'

const Test = tw.div`bg-red-400`

const Dashboard = () => {
  return <Test tw="p-3">Dashboard</Test>
}

export default Dashboard
