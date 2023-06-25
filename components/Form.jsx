import Link from 'next/link'

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} публікацію</span>
      </h1>
      <p className="desc text-left max-w-md">
        {(type = type === 'Змінити' ? 'Змінюй' : type)} дивовижні підказки та
        ділись ними зі світом, а також дай волю своїй уяві з будь-якою
        платформою на базі ШІ
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Ваша підказка ШІ
          </span>

          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Напишіть свій пост тут"
            required
            className="form_textarea "
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Тег{' '}
            <span className="font-normal">
              (#продукт, #веброзробка, #ідея тощо.)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type="text"
            placeholder="Тег"
            required
            className="form_input"
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Скасувати
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {(type = type === 'Змінюй' ? 'Змінити' : type)}
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form
