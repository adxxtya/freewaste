"use client";
import AuthComponent from "@/components/Auth/AuthComponent";
import CardAdd from "@/components/Card/Add-Resources";
import CardDataStats from "@/components/Card/Card";
import Loader from "@/components/common/Loader";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { useState } from "react";

const Resourcespage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [apiResponse, setApiResponse] = useState<any | null>(null);
  const [loading, setLoading] = useState(false); // Add loading state

  const handleFileUpload = async (event: any) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true); // Set loading state to true before making the API request

    try {
      const response = await fetch(
        "https://detect.roboflow.com/e-waste-detection-model/5?api_key=t6mreEbtxeQTmQVAPSyh",
        {
          method: "POST",
          body: formData,
          headers: {
            // 'Content-Type': 'application/x-www-form-urlencoded', // Not needed for FormData
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to upload file");
      }

      const data = await response.json();
      setApiResponse(data);
    } catch (error) {
      console.error("Error uploading file:", error);
      // Handle error
    } finally {
      setLoading(false); // Set loading state to false after API request is complete
    }
  };

  return (
    <>
      <div className="flex flex-col gap-4 w-full">
        {!apiResponse && !loading ? ( // Check both apiResponse and loading state
          <>
            <label htmlFor="file-upload">
              <CardAdd title="Add Resources" desc="Resources" />
              <input
                id="file-upload"
                type="file"
                style={{ display: "none" }}
                onChange={handleFileUpload}
              />
            </label>
            <div className="flex flex-col md:flex-row gap-4">
              <CardDataStats
                title="Find E-Waste Recycling Centers"
                desc="Locate e-waste recycling centers across India using our platform. With a comprehensive database of authorized facilities, individuals and businesses can responsibly dispose of electronic waste, contributing to environmental sustainability."
              />
              <CardDataStats
                title="Learn E-Waste Management Best Practices"
                desc="Access educational resources and guidelines on proper e-waste management practices. From recycling electronics to reducing electronic waste generation, our platform offers valuable insights to promote responsible handling of electronic products."
              />
              <CardDataStats
                title="Track E-Waste Collection and Recycling"
                desc="Monitor the collection and recycling progress of e-waste through our platform. Stay informed about the volume of electronic waste collected, recycled materials recovered, and environmental impact achieved by participating in e-waste management initiatives."
              />
            </div>
          </>
        ) : loading ? (
          <div>
            <Loader />
          </div>
        ) : (
          <div>
            <div className="">
              <h2 className="text-3xl font-semibold mb-4">E-waste Detection</h2>
              <div className="text-xl mb-12">
                The item you uploaded is {apiResponse.predictions[0].class}
              </div>
              <h2 className="text-3xl font-semibold mb-4">
                E-waste Management
              </h2>
              <div className="text-xl">
                {apiResponse.predictions[0].class === "Keyboard" && (
                  <p>
                    Keyboards often contain hazardous materials like lead and
                    mercury. Dispose of them properly by taking them to a
                    certified e-waste recycling center or donating them for
                    refurbishment.
                  </p>
                )}
                {apiResponse.predictions[0].class === "computer mouse" && (
                  <p>
                    Computer mice can be recycled at electronic waste recycling
                    facilities. Look for local programs or drop-off locations to
                    ensure responsible disposal.
                  </p>
                )}
                {apiResponse.predictions[0].class === "HDD" && (
                  <p>
                    Hard disks may contain sensitive data, so ensure data
                    destruction before disposal. Recycle them through certified
                    e-waste recycling programs or seek professional IT disposal
                    services.
                  </p>
                )}
                {apiResponse.predictions[0].class === "USB Flash Drive" && (
                  <p>
                    USB flash drives can be recycled through electronic waste
                    recycling programs. Make sure to delete any sensitive data
                    before disposal. Consider donating or repurposing them if
                    still functional.
                  </p>
                )}
                {apiResponse.predictions[0].class === "internal HDD" && (
                  <p>
                    Internal hard disk drives should be properly disposed of
                    through e-waste recycling centers or certified IT disposal
                    services. Ensure proper data wiping or destruction to
                    protect sensitive information.
                  </p>
                )}
                {apiResponse.predictions[0].class === "Router" && (
                  <p>
                    Routers can be recycled at electronic waste recycling
                    facilities. Before disposal, reset the router to factory
                    settings to remove personal data and passwords. Check with
                    local recycling programs for proper disposal methods.
                  </p>
                )}
                {apiResponse.predictions[0].class === "Battery" && (
                  <p>
                    Dispose of batteries properly through battery recycling
                    programs or hazardous waste collection centers. Do not throw
                    batteries in the regular trash as they can leak harmful
                    chemicals into the environment. Look for local battery
                    recycling options for safe disposal.
                  </p>
                )}
                <div className="mt-12">
                  <Link href={"/"} className="text-blue-500 underline pt-12">
                    You can bring your{" "}
                    <span className="text-green-500 underline">
                      {apiResponse.predictions[0].class}
                    </span>{" "}
                    waste to your nearest E-waste facility
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Resourcespage;
