import mongoose from "mongoose";

const uri = "mongodb+srv://myuser:RkpGakd5Ykts@pocmycommdb.eeqoyfi.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri);

export default mongoose;
