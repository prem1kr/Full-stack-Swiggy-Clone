import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
    try{
        const token = req.cookie.token;
        if(!token){
            return res.status(400).json({message:"Token not found"});
        }
        const decodeToken = jwt.verify(token,process.env.JWT_SECRET);
        if(!decodeToken){
            return res.status(404).json({message:"user not verified"});
        }

        req.userId = decodeToken.userId;
        next();

    }catch(error){
       return res.status(500).json(`is auth error ${error}`);
    }
}

export default isAuth;