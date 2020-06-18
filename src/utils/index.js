import immigrationData from './immigrationData';

// 获取某个国家移民详情
export function getImmigrationDetail(countryName) {
  let result;
  for (const item of immigrationData) {
    if (item.country == countryName) {
      result = item;
      break;
    }
  }
  return result;
}
