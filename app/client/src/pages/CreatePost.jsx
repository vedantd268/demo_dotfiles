import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { preview } from '../assets';
import { getrandomprompt } from '../utils';
import { Formfile, Loader } from '../components';
import { useUser } from '@clerk/clerk-react';
// import { ClerkProvider } from '@clerk/clerk-react'

const CreatePost = () => {
  const [isToggled, setIsToggled] = useState(false);
  let spqul =isToggled?1:6;
  const { isSignedIn, user, isLoaded } = useUser()
  const navigate = useNavigate();
  var fname;
  if (isSignedIn) {
    fname = user.fullName;
  }
  else {
    fname = "";
  }
  console.log(fname);
  const [form, setform] = useState({
    name: '',
    prompt: '',
    photo: '',
  });

  form.name = fname;

  // setform({name:fname});
  // console.log(form);
  const [generatingimg, setgeneratingimg] = useState(false);
  const [loading, setloading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();


    if (form.prompt && form.photo && isSignedIn) {
      setloading(true);
      try {
        const response = await fetch('http://localhost:8080/api/v1/post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...form }),
        });
        await response.json();
        alert('Success');
        navigate('/');
      } catch (err) {
        alert(err);
      } finally {
        setloading(false);
      }
    } else {
      alert('Please Sign In To Our Page');
    }
  }
  const generateImage = async () => {
    if (form.prompt) {
      try {
        setgeneratingimg(true);
        // const response = await fetch("http://localhost:8080/api/v1/dalle", {
        //   method: "POST",
        //   headers: {
        //   "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     prompt: form.prompt,
        //   }),
        // });


        const response = await fetch('https://api.getimg.ai/v1/flux-schnell/text-to-image', {
          method: 'POST',
          headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: 'Bearer key-49l1eut8GoxYllAS8qWKuMfPXZljbr9pAvx22wcTu5uIyuVU0kcWkqTofAO7W0mGFZceQ9XU58bCAZAmJpMHm4KMKrMJDxaJ'
          },
          body: JSON.stringify({
            prompt: form.prompt,
            width: 1024,
            height: 1024,
            steps: spqul,
            output_format: 'jpeg',
            response_format: 'b64'
          })
        })
        // .then(response => response.json())
        // .then(response => console.log(response))
        // .catch(err => console.error(err));

        const data = await response.json();
        setform({ ...form, photo: `data:image/jpeg;base64,${data.image}` });

      } catch (err) {
        alert(err);
      } finally {
        setgeneratingimg(false);
      }
    } else {
      alert('Please provide proper prompt');
    }
  }
  const handleChange = (e) => {
    // console.log(fname);
    form.name = fname;
    form.prompt = e.target.value;
    setform({ ...form });
  }


  const [toggle, settoggle] = useState(true);

  const handletoggle = () => {
    settoggle(toggle ? false : true);
    console.log(toggle);
  }

  const handleSurpriseMe = () => {
    const randomprompt = getrandomprompt(form.prompt);
    setform({ ...form, prompt: randomprompt });
  }


  
  
  console.log(spqul);



  return (

    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] dark:text-neutral-100 text-[32px]">AI Image Generator</h1>
        <p className='mt-2 text-[#666e75] text[16px] max-w[500px]'>Create imaginative and visually stanning images thrugh My AI and share them with the community</p>
      </div>
      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">

          <div className="relative bg-gray-50 dark:bg-gray-800 dark:border-gray-600 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center">
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className='w-full h-full object-contain grayscale' />
            ) : (
              <img src={preview} alt="preview" className='w-9/12 h-9/12 object-contain opacity-40' />
            )}
            {generatingimg && (
              <div className="absolute insert-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)]">
                <Loader />
              </div>
            )}
          </div>
        </div>
        <Formfile
          LabelName="your name"
          type="text"
          name="name"
          placeholder="John Doe"
          value={fname}
          handleChange={handleChange}
          ispresent={false}
        />
        <Formfile
          LabelName="prompt"
          type="text"
          name="prompt"
          placeholder="Write a Prompt Or Click On Surprise Me Button"
          value={form.prompt}
          handleChange={handleChange}
          isSurpriseMe
          handleSurpriseMe={handleSurpriseMe}
          ispresent={true}
        />
        <div className="mt-2 gap-5">
          <button
            type='button'
            onClick={generateImage}
            className='text-gray-200 bg-green-700 font-medium rounded-md w-full sm:w-auto text-sm px-11 py-2.5 text-center'
          >
            {generatingimg ? 'Generating...' : 'Generate'}
          </button>

          <div className='mt-2 gap-5 text-gray-200'>
          <button type="button" className={` w-1/2 sm:w-auto text-sm px-11 py-2.5 text-center rounded-l-md ${isToggled ? "bg-red-500 rounded" : "bg-gray-800"}`} onClick={()=>{
            setIsToggled(!isToggled);
          }}>speed</button>

            <button type="button" className={` w-1/2 sm:w-auto text-sm px-11 py-2.5 text-center rounded-r-md ${isToggled ? "bg-gray-800" : "bg-red-500 rounded"}`} onClick={()=>{
            setIsToggled(!isToggled);
          }}>quality</button>
          </div>


          {/* <button
      onClick={() => setIsToggled(!isToggled)}
      className={`relative inline-flex items-center w-16 h-8 rounded-full transition-colors duration-200 ${
        isToggled ? "bg-green-500" : "bg-gray-300"
      }`}
    >
      <span
        className={`absolute left-1 top-1 w-6 h-6 transform rounded-1 bg-white shadow-md transition-transform duration-200 ${
          isToggled ? "translate-x-8" : ""
        }`}
      >{isToggled?"speed":"quality"}</span>
      <span className="sr-only">Toggle</span>
    </button> */}

        </div>
        <div className="mt-6">
          <p className='mt-2 text-[#666e75] text-[14px]'>Once you have created the image you want,you can share it with others in community</p>
          <button
            type='submit'
            className='mt-3 text-gray-200 bg-[#6469ff] dark:bg-[#393ec3] font-medium rounded-md text-sm  w-full sm:w-auto px-5 py-2.5 text-center'>
            {loading ? 'Sharing...' : 'Share with the community'}
          </button>
        </div>
      </form>
    </section>
  )

}

export default CreatePost;