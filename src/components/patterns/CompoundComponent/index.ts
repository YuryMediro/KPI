import { RootTabs } from "./Tabs/Tabs";
import { TabsContent } from "./Tabs/TabsContent";
import { TabsList } from "./Tabs/TabsList";
import { TabsTrigger } from "./Tabs/TabsTrigger";

export const Tabs = Object.assign(RootTabs, {
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
});
