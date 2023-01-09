import copy from 'copy-to-clipboard';
import { useState } from 'react';
import { BeatLoader } from 'react-spinners';
import styled from 'styled-components';
import Page from 'components/Page';
import { media } from 'utils/media';
import CopyButton from './CopyButton';

export default function HsSearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [hsData, setHsData]: any[] = useState([]);
  const [fromNumber, setFromNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [resultsLoading, setResultsLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [noMoreResults, setNoMoreResults] = useState(false);
  const [queryResultsCount, setQueryResultsCount] = useState(0);

  console.log(hsData);

  const getSearchResultsCount = async (query: String) => {
    try {
      let response = await fetch(`http://35.72.226.153:8060/searchglobalres/globalhs?q=${query}`);
      let data = await response.json();
      setQueryResultsCount(data.hits.total.value);
    } catch (e) {
      console.log(e);
    }
  };

  const getHsData = async (query: String, fromNumber: Number) => {
    setResultsLoading(true);
    setNoResults(false);
    setNoMoreResults(false);
    try {
      let response = await fetch(`http://35.72.226.153:8060/searchglobal/globalhs?q=${query}&n=${fromNumber}`);
      let data: any = await response.json();
      console.log(data);
      setResultsLoading(false);
      if (data.length > 0) {
        setHsData(data);
      } else {
        setNoResults(true);
        setHsData([]);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getMoreData = async (query: String, fromNumber: Number) => {
    setIsLoading(true);
    setNoResults(false);
    setNoMoreResults(false);
    try {
      let response = await fetch(`http://35.72.226.153:8060/searchglobal/globalhs?q=${query}&n=${fromNumber}`);
      let data: any = await response.json();
      console.log(data);
      setIsLoading(false);
      if (data.length > 0) {
        setHsData((prev: any) => [...prev, ...data]);
      } else {
        setIsLoading(false);
        setNoMoreResults(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Page title="HS Code Look Up" description="For shipments from India to United States">
      <ContactContainer>
        <div className="w-full md:w-[80%] m-auto mb-40">
          <div>
            <div className="flex  items-center justify-between m-auto w-full mb-20  md:w-[80%] lg:w-[70%] px-8 py-1 gap-2 space-x-6 shadow-md rounded-xl">
              <div className="flex items-center px-4 space-x-4 rounded-lg w-full ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 opacity-30"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  id="hscodeinput"
                  className="bg-[color:var(--inputBackground)] w-full p-5 outline-none text-2xl"
                  type="text"
                  placeholder="Select product name or HS code..."
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.code === 'Enter') {
                      setFromNumber(0);
                      getSearchResultsCount(searchQuery);
                      getHsData(searchQuery, fromNumber);
                    }
                  }}
                />
              </div>
              <div
                onClick={() => {
                  setFromNumber(0);
                  getSearchResultsCount(searchQuery);
                  getHsData(searchQuery, fromNumber);
                }}
                className="bg-[#4F46E5] py-3 w-36 text-center px-6 text-lg md:text-2xl text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer"
              >
                <span>Search</span>
              </div>
            </div>
            {hsData.length > 0 && queryResultsCount ? (
              <div className="text-xl">{`Showing ${hsData.length} out of ${queryResultsCount} results matching your query.`}</div>
            ) : null}
          </div>

          <div className="w-full text-center">
            {noResults ? (
              <div
                className="flex w-[60%] m-auto p-4 mb-4 mt-2 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800"
                role="alert"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 inline w-8 h-8 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Info</span>
                <div className="text-2xl">
                  <span className="font-bold text-2xl">No Results Found!</span> Try Searching for Another Product.
                </div>
              </div>
            ) : null}
            {!resultsLoading && hsData ? (
              hsData.map((e: any) => {
                return (
                  <div key={e.score} className="mx-auto my-3 px-3 md:px-10 py-2 border mt-5 mb-5 border-black ">
                    <div className="flex flex-col md:flex-row py-2 text-2xl justify-between">
                      <div className=" flex border md:border-none md:flex-col md:justify-start gap-4 items-center w-full md:w-1/3 py-2">
                        <div className="font-bold">Section</div>
                        <div className="text-xl px-2  md:mt-1">{e._source.section}</div>
                      </div>
                      <div className=" flex border md:border-none md:flex-col md:justify-start gap-4 items-center w-full md:w-1/3 py-2">
                        <div className="font-bold">Chapter</div>
                        <div className="text-xl px-2 md:mt-1"> {e._source.chapter}</div>
                      </div>
                      <div className=" flex border md:border-none md:flex-col md:justify-start gap-4 items-center w-full md:w-1/3 py-2">
                        <div className="font-bold">Heading</div>
                        <div className="text-xl px-2 md:mt-1"> {e._source.heading}</div>
                      </div>
                    </div>
                    <div className="mx-auto text-3xl text-center mt-3 py-1">
                      <div>
                        {e._source.hscode} {'-'} {e._source.description}
                      </div>
                    </div>
                    <div className="antialiased mx-auto flex flex-col w-full md:flex-row gap-4 md:px-8">
                      <div className="w-full md:w-1/2 px-5 md:px-0 md:py-8">
                        <div className=" rounded-b md:rounded-b-none md:rounded-r overflow-hidden">
                          <div className="text-2xl font-medium uppercase p-8 text-center border-b  tracking-wide">
                            ITC HS Code (for export from India)
                          </div>
                          <div className="overflow-x-auto relative">
                            <table className="w-full text-xl text-left">
                              <thead className="text-xl uppercase">
                                <tr>
                                  <th scope="col" className="py-3 px-4">
                                    ITC HS Code
                                  </th>
                                  <th scope="col" className="py-3 px-4">
                                    Product Description
                                  </th>
                                  <th scope="col" className="py-3 px-4">
                                    Unit
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {e.indiaData.length > 0 ? (
                                  e.indiaData.map((e: any) => {
                                    return (
                                      <>
                                        {e._source.itc_hscode.length > 6 ? (
                                          <>
                                            <tr key={e._id} className=" border-b">
                                              <th scope="row" className="py-4 px-4 font-medium whitespace-nowrap flex justify-start gap-4">
                                                {e._source.itc_hscode}
                                                <CopyButton code={e._source.itc_hscode} copy={copy} />
                                              </th>
                                              <td className="py-4 px-4">{e._source.description}</td>
                                              <td className="py-4 px-6">{e._source.unit}</td>
                                            </tr>
                                          </>
                                        ) : null}
                                      </>
                                    );
                                  })
                                ) : (
                                  <p className="mt-8 m-auto">No Results Found</p>
                                )}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 px-5 md:px-0 md:py-8">
                        <div className=" rounded-b md:rounded-b-none md:rounded-r overflow-hidden">
                          <div className="text-2xl font-medium uppercase p-8 text-center border-b tracking-wide">
                            HTS Code (for export to US)
                          </div>
                          <div className="overflow-x-auto relative">
                            <table className="w-full text-xl text-left">
                              <thead className="text-xl uppercase">
                                <tr>
                                  <th scope="col" className="py-3 px-4">
                                    HTS Code
                                  </th>
                                  <th scope="col" className="py-3 px-4">
                                    Product Description
                                  </th>
                                  {/* <th scope="col" className="py-3 px-4">
                                    Unit
                                  </th> */}
                                </tr>
                              </thead>
                              <tbody>
                                {e.usaData?.map((e: any) => {
                                  return (
                                    <>
                                      {e._source.htsno.length > 8 ? (
                                        <tr key={e._id} className=" border-b">
                                          <th scope="row" className="py-4 px-4 font-medium whitespace-nowrap flex justify-start gap-4">
                                            {e._source.htsno}
                                            {e._source.htsno.length > 10 && <CopyButton code={e._source.htsno} copy={copy} />}
                                          </th>
                                          <td className="py-4 px-4">{e._source.description}</td>
                                          {/* <td className="py-4 px-4">{e._source.units[0]}</td> */}
                                        </tr>
                                      ) : null}
                                    </>
                                  );
                                })}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="italic text-lg mb-2">
                      Disclaimer: The data shown above is for informational purposes only. Please{' '}
                      <span className="underline">get in touch</span> with our licensed custom broker if you&#39;re an importer/exporter.
                    </div>
                  </div>
                );
              })
            ) : (
              <BeatLoader color="#1673FF" className="m-auto" />
            )}
          </div>

          {hsData && hsData.length >= 5 ? (
            <div className="w-full flex justify-center items-center">
              {!isLoading && !noMoreResults ? (
                <button
                  onClick={() => {
                    setFromNumber((prev: number) => {
                      return hsData.length % 5 === 0 ? (prev = prev + 5) : 0;
                    });
                    getMoreData(searchQuery, fromNumber);
                  }}
                  className="px-8 py-4 relative  rounded group overflow-hidden font-bold bg-purple-50 text-[#1673FF] flex items-center gap-3"
                >
                  <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#1673FF] group-hover:h-full opacity-90"></span>
                  <span className="relative text-2xl group-hover:text-white">Load More</span>
                  {/* <img className="h-10 w-10" src="https://static.thenounproject.com/png/1144832-200.png" alt="loadmore" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-black hover:text-white "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              ) : noMoreResults ? (
                <p className="text-2xl font-bold italic">No more results</p>
              ) : (
                <BeatLoader color="#1673FF" className="m-auto" />
              )}
            </div>
          ) : null}
        </div>
      </ContactContainer>
    </Page>
  );
}

const ContactContainer = styled.div`
  display: flex;

  ${media('<=tablet')} {
    flex-direction: column;
  }
`;
