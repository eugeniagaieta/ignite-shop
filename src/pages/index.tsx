import { styled } from "../styles"

const Button = styled("button", {
  backgroundColor: "$gray100",
  width: "10%",
})

export default function Page() {
  return (
    <>
      <h1>Hello, Next.js!</h1>
      <Button onClick={() => alert("Te amo, Márcia Gaieta")}>Click me</Button>
    </>
  )
}
