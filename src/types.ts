export interface StoryType {
    story_id: string;
    title:string;
    main: string;
    mainImage: string;
    story: string[]; // Assuming Vec<string> is equivalent to an array of strings
    user: string;
    createdAt: bigint; // Assuming nat64 is equivalent to bigint
    updatedAt?: bigint | null; // Assuming Opt<nat64> is equivalent to an optional bigint
  }
  