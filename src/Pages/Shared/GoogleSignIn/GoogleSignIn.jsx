import React from 'react';
import { AiFillGoogleCircle } from "react-icons/ai";

const GoogleSignIn = () => {

    const handleGoogleSignIn = {

    }

    return (
        <div>
            <div className="divider">Or</div>
            <div className='text-center'>
                <button onClick={handleGoogleSignIn} className='btn btn-circle btn-outline'><AiFillGoogleCircle className='text-2xl'/></button>
            </div>
        </div>
    );
};

export default GoogleSignIn;