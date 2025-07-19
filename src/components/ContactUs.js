const ContactUs=()=>{
    return (
    <div>
        <h1 className="flex items-center justify-center p-4 m-4 text-3xl font-bold">Contact Us Page</h1>
        <form className="flex items-center justify-center gap-5">
            <input type="text" className="border border-black" placeholder="name"/>
            <input type="text" className="border border-black" placeholder="message "/>
            <button className="p-2 m-2 font-bold bg-green-600 rounded-md ">Submit</button>
        </form>
</div>

)

}
export default ContactUs