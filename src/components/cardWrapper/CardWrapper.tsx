import { type PropsWithChildren } from "react";

function ContentCard({ children }: PropsWithChildren) {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}

export default ContentCard;
