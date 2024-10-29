const MyProfile = () => {
    return (
        <div className="flex flex-col items-center w-full h-screen bg-gradient-to-b from-purple-50 to-purple-100">
            
            <div className="flex flex-col items-center w-full max-w-md p-8 mt-20 bg-white border border-gray-200 rounded-lg shadow-xl text-gray-800">
                <h1 className="text-4xl font-extrabold text-purple-600 mb-6">ข้อมูลส่วนตัว</h1>
                
                <div className="text-lg leading-relaxed space-y-4">
                    <p>
                        <strong>ชื่อ:</strong> กิตติศักดิ์ วงศ์ราจา
                    </p>
                    <p>
                        <strong>อายุ:</strong> 20 ปี
                    </p>
                    <p>
                        <strong>คณะ:</strong> ICT
                    </p>
                    <p>
                        <strong>สาขา:</strong> SE
                    </p>
                    <p>
                        <strong>อีเมล:</strong> 66026000@up.ac.th
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
