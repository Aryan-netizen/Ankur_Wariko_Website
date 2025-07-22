import React from "react";

const Course_Detail = () => {
  return (
    <div className="h-[200vh] w-full overflow-hidden pt-20 px-10">
      <h1 className="text-5xl font-gilroy-bold">Time Mangement</h1>
      <h1 className="text-5xl font-gilroy-light mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
        recusandae quaerat quae itaque explicabo? Corporis dolorum praesentium
        earum optio magni, iste voluptate ea ad. Excepturi.
      </h1>
      
      {/* second div */}
      <div className="flex mt-10 gap-4">
        <div className="w-[50%] flex flex-col gap-3 p-2">
          <h1 className="text-4xl font-gilroy-bold">Course Details</h1>
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-gilroy-semi">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
              neque!
            </h2>
            <p className="text-lg opacity-60 font-gilroy-reg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur nulla nobis pariatur blanditiis exercitationem
              explicabo vero magni nemo quidem, commodi similique repudiandae ex
              animi? Mollitia harum voluptatum beatae deleniti perferendis.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-gilroy-semi">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
              neque!
            </h2>
            <p className="text-lg opacity-60 font-gilroy-reg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur nulla nobis pariatur blanditiis exercitationem
              explicabo vero magni nemo quidem, commodi similique repudiandae ex
              animi? Mollitia harum voluptatum beatae deleniti perferendis.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-gilroy-semi">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
              neque!
            </h2>
            <p className="text-lg opacity-60 font-gilroy-reg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur nulla nobis pariatur blanditiis exercitationem
              explicabo vero magni nemo quidem, commodi similique repudiandae ex
              animi? Mollitia harum voluptatum beatae deleniti perferendis.
            </p>
          </div>
        </div>

     {/* second div */}
        <div className="p-8 w-[50%] h-fit rounded-2xl flex flex-col gap-2">
          <h1 className="text-4xl font-gilroy-bold">What you'll learn</h1>
          <ul className="list-disc mt-3 ml-2">
            <li>
              <p className="text-lg font-gilroy-semi">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis
              </p>
            </li>
            <li>
              <p className="text-lg font-gilroy-semi">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis
              </p>
            </li>
            <li>
              <p className="text-lg font-gilroy-semi">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis
              </p>
            </li>
            <li>
              <p className="text-lg font-gilroy-semi">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis
              </p>
            </li>
            <li>
              <p className="text-lg font-gilroy-semi">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis
              </p>
            </li>
            <li>
              <p className="text-lg font-gilroy-semi">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis
              </p>
            </li>
          </ul>
          <button className="px-8 py-4 mt-8 ml-4 text-xl bg-amber-400 text-black font-gilroy-bold rounded-xl">
             Enroll Now ➜
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course_Detail;
