import UserCard from "@/components/cards/UserCard";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";

import { UserFilters } from "@/constants/filters";
import { getAllusers } from "@/lib/actions/user.actions";
import Link from "next/link";

const Page = async () => {
  //const result = await getAllusers({});

  return (
    <>
      <h1 className="h1-bold text-dark100_light900">All Tags</h1>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/tags"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for tags"
          otherClasses="flex-1"
        />

        <Filter
          filters={UserFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
        />
      </div>
      <section className="mt-12 flex flex-wrap gap-4">
        {result.tags.length > 0 ? (
          result.tags.map((tag) => (
          <div>
            Tag card
          </div>
         
          ))
        ) : (
            <NoResult
            title="No tags found"
            description="It looks like there are no tags found."
            link="/ask-question"
            linkTitle="Ask a question"
            />
          
        )}
      </section>
    </>
  );
};

export default Page;
