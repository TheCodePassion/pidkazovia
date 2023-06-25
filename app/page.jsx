import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col ">
      <h1 className="head_text text-center">
        Відкривай та поширюй
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> Підказки для ШI</span>
      </h1>
      <p className="desc text-center">
        Підказовія - це відкритий інструмент штучного інтелекту для сучасного
        світу, який дозволяє відкривати, створювати та ділитися креативними
        підказками
      </p>
      <Feed />
    </section>
  )
}
export default Home
