
export const metadata = {
  title: 'Liên hệ',
  description: 'Liên hệ mindmap',
  // openGraph: {
  //   title: 'Price list | Mindmap',
  //   description: 'Liên hệ mindmap',
  // },
}
function ContactPage() {
  return (
    <div className="my-[32px] w-fit mx-auto border border-[#ddd] p-5">
      <form className="flex flex-col gap-y-5">
        <h1 className="text-3xl text-primary-100 text-center">Contact Us</h1>
        <div className="flex gap-x-5">
          <input
            type="text"
            name="firstName"
            id="first-name"
            placeholder="First Name"
            className="py-2 px-3 border-[#000] border outline-[#6B21A8] text-primary-100"
          />
          <input
            type="text"
            name="lastName"
            id="last-name"
            placeholder="First Name"
            className="py-2 px-3 border-[#000] border outline-[#6B21A8] text-primary-100"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="py-2 px-3 border-[#000] border w-full outline-[#6B21A8] text-primary-100"
          />
        </div>
        <div>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Phone"
            className="py-2 px-3 border-[#000] border w-full outline-[#6B21A8] text-primary-100"
          />
        </div>
        <div>
          <textarea
            name="message"
            id="message"
            placeholder="Write your message..."
            className="py-2 px-3 border-[#000] border w-full outline-[#6B21A8] text-primary-100 min-h-[120px]"
          ></textarea>
        </div>
        <button className="font-bold bg-purple-500 text-300 py-2.5">
          Send Message
        </button>
      </form>
    </div>
  )
}

export default ContactPage