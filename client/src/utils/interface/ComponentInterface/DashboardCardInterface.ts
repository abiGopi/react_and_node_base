export interface ISearchData {
  projectName: string
  projectStatus: string
  projectType: string
}
export interface IDashboardCardInterface {
  projectDetails: ISearchData[]
}
